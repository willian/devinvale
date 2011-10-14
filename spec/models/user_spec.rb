require 'spec_helper'

describe User do
  context "validations" do
    context "with valid data" do
      let(:user) { Factory.build(:user) }

      it "should be valid" do
        user.should be_valid
      end
    end

    context "with invalid data" do
      it "should be invalid without a name" do
        user = Factory.build(:user, name: nil)
        user.should_not be_valid
      end

      it "should be invalid without an email" do
        user = Factory.build(:user, email: nil)
        user.should_not be_valid
      end

      it "should be invalid without a password" do
        user = Factory.build(:user, password: nil, password_confirmation: nil)
        user.should_not be_valid
      end

      it "should be invalid without a foreigner" do
        user = Factory.build(:user, foreigner: nil)
        user.should_not be_valid
      end

      it "should be invalid without an ita_student" do
        user = Factory.build(:user, ita_student: nil)
        user.should_not be_valid
      end

      it "should be invalid without an ita_badge" do
        user = Factory.build(:user, ita_badge: nil)
        user.should_not be_valid
      end

      it "should be invalid with a wrong cpf" do
        user = Factory.build(:user, cpf: "34251627386")
        user.should_not be_valid
      end

      it "should be invalid with a wrong email" do
        user = Factory.build(:user, email: "test@@gmail.com")
        user.should_not be_valid
      end

      it "should be invalid when password is too small" do
        user = Factory.build(:user, password: "123")
        user.should_not be_valid
      end

      it "should be invalid when password and confirmation doesn't match" do
        user = Factory.build(:user, password: "1234", password_confirmation: "1235")
        user.should_not be_valid
      end
    end
  end
end
