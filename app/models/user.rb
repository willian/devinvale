class User < ActiveRecord::Base
  attr_accessible :name, :email, :password, :password_confirmation, :twitter,
                  :cpf, :company, :college, :foreigner, :ita_student, :ita_badge
  
  permalink :name, :to_param => :permalink
  authenticates_with_sorcery!
  

  validates :name, :email, :password, :cpf, presence: true
  validates :foreigner, :ita_student, :ita_badge, inclusion: [false, true]
  validates_cpf_format_of :cpf
  validates_email_format_of :email
  validates_length_of :password, minimum: 4, if: :password
  validates_confirmation_of :password, if: :password
end
