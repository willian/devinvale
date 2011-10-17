class AdminController < ApplicationController

  def index
    @users = User.all(:order => 'id DESC')
  end

  def remove_user
    @user = User.find(params[:id])
    @user.destroy
    redirect_to(admin_index_path)
  end

end
