class User
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :email, type: String
  field :crypted_password, type: String
  field :salt, type: String
  field :remember_me_token, type: String, default: nil
  field :remember_me_token_expires_at, type: Time, default: nil
  field :reset_password_token, type: String, default: nil
  field :reset_password_token_expires_at, type: DateTime, default: nil
  field :reset_password_email_sent_at, type: DateTime, default: nil
  field :twitter, type: String, default: nil
  field :cpf, type: String
  field :company, type: String, default: nil
  field :college, type: String, default: nil
  field :foreigner, type: Boolean, default: false
  field :ita_student, type: Boolean, default: false
  field :ita_badge, type: Boolean, default: false

  permalink :name
  authenticates_with_sorcery!

  attr_accessible :name, :email, :password, :password_confirmation, :twitter,
                  :cpf, :company, :college, :foreigner, :ita_student, :ita_badge

  validates :name, :email, :password, :cpf, presence: true
  validates :foreigner, :ita_student, :ita_badge, inclusion: [false, true]
  validates_cpf_format_of :cpf
  validates_email_format_of :email
  validates_length_of :password, minimum: 4, if: :password
  validates_confirmation_of :password, if: :password
end
