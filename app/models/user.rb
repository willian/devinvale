class User < ActiveRecord::Base
  attr_accessible :name, :email, :twitter, :city_name, :state_name,
                  :cpf, :company, :college, :foreigner, :ita_student, :ita_badge, :waiting_list

  permalink :name, :to_param => :permalink


  validates :name, :email, :cpf, :city_name, :state_name, presence: true
  validates :foreigner, :ita_student, :ita_badge, inclusion: [false, true]
  validates :email, :cpf, uniqueness: true
  validates_cpf_format_of :cpf
  validates_email_format_of :email
end
