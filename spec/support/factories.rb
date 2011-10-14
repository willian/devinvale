FactoryGirl.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.free_email }
    password { "123456" }
    password_confirmation { "123456" }
    twitter { Faker::Lorem.words[0] }
    cpf { Cpf.generate }
    company { Faker::Company.name }
    foreigner { false }
    ita_student { false }
    ita_badge { false }
  end
end
