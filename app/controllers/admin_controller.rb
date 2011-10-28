require 'digest/md5'

class AdminController < ApplicationController

  before_filter :authenticate

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

  protected

  def authenticate
    authenticate_or_request_with_http_basic do |username, password|
      Digest::MD5.hexdigest(username) == "28bf2e6c32b964f7261a327256774a2f" && Digest::MD5.hexdigest(password) == "fad23ce038b4a1f2a8408890231e5392"
    end
  end

end
