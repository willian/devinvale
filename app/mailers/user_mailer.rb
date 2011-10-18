class UserMailer < ActionMailer::Base
  default from: "contato@devinvale.com.br"

  def confirmation(user)
    @user = user
    mail to: user.email
  end

  def confirmation_waiting_list(user)
    @user = user
    mail to: user.email
  end

end
