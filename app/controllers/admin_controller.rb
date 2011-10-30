require 'digest/md5'
require 'iconv'
require 'csv'

class AdminController < ApplicationController

  before_filter :authenticate
  BOM = "\377\376" #Byte Order Mark

  def index
    @users = User.all(:order => 'id DESC')
  end

  def remove_user
    @user = User.find(params[:id])
    @user.destroy
    redirect_to(admin_index_path)
  end

  def confirm_user
    @user = User.find(params[:id])
    @user.waiting_list = false
    if @user.save
      UserMailer.delay(run_at: 1.minute.from_now).confirm_waiting_list(@user)
    end
    redirect_to(admin_index_path)
  end

  def cancel_user
    @user = User.find(params[:id])
    @user.canceled = true
    @user.save
    redirect_to(admin_index_path)
  end

  def export
    @users = User.all(:order => 'id DESC')
    respond_to do |format|
      format.csv { export_csv(@users) }
    end
  end

  protected

  def authenticate
    authenticate_or_request_with_http_basic do |username, password|
      Digest::MD5.hexdigest(username) == "28bf2e6c32b964f7261a327256774a2f" && Digest::MD5.hexdigest(password) == "fad23ce038b4a1f2a8408890231e5392"
    end
  end

  def export_csv(users)
    filename = I18n.l(Time.now, :format => :short) + "_Registrations.csv"
    content = CSV.generate do |csv| 
      csv << ["Nome","E-mail","Twitter","Cidade","Estado","CPF","Empresa","Faculdade","Estrangeiro?","Estudante","Cracha do ITA?","Lista de Espera","Cancelado"]
      users.each do |e|
        csv << [e.name, e.email, e.twitter, e.city_name, e.state_name, e.cpf, e.company, e.college, e.foreigner, e.ita_student, e.ita_badge, e.waiting_list, e.canceled]
        end
    end
    send_data content, :filename => filename, :type => 'text/csv; charset=utf-8; header=present'
  end

end
