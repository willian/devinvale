class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    @user.waiting_list = true
    if @user.save
      UserMailer.delay(run_at: 1.minute.from_now).confirmation(@user)
      redirect_to root_path, notice: t("flash_messages.users.create.notice")
    else
      render action: "new"
    end
  end
end
