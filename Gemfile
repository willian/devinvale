source "http://rubygems.org"

gem "rails", "3.1.0"
gem "mysql2"
gem "jquery-rails"

# Use unicorn as the web server
# gem "unicorn"

# Deploy with Capistrano
gem "capistrano"
gem "capistrano_colors"

gem "airbrake"
gem "bluepill"
gem "delayed_job"
gem "i18n-js"
gem "permalink"
gem "simple_form"
gem "swiss_knife"
gem "validators", git: "git://github.com/willian/validators.git", branch: "master"

group :test do
  gem "capybara"
  gem "factory_girl"
  gem "ffaker"
  gem "fuubar"
  gem "guard-spork"
  gem "shoulda-matchers"
  gem "simplecov"
end

group :development, :test do
  gem "guard-rspec"
  gem "jasmine"
  gem "ruby-debug19", require: "ruby-debug"
  gem "rspec-rails"
  gem "spork", "~> 0.9.0.rc"
end
