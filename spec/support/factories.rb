FactoryGirl.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.free_email }
    city_name { Faker::Lorem.words[0] }
    state_name { Faker::Lorem.words[0] }
    twitter { Faker::Lorem.words[0] }
    cpf { Cpf.generate }
    company { Faker::Company.name }
    foreigner { false }
    ita_student { false }
    ita_badge { false }
  end
end
