class UserMailer < ActionMailer::Base
  default from: "from@example.com"

  def confirmation(user)
    @user = user

    mail to: user.email
  end
end
