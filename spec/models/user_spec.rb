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

      it "should be invalid without a city name" do
        user = Factory.build(:user, city_name: nil)
        user.should_not be_valid
      end

      it "should be invalid without a state name" do
        user = Factory.build(:user, state_name: nil)
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
    end
  end
end
