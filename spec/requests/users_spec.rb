require 'spec_helper'

describe "Users" do
  describe "GET /users/new" do
    it "works! (now write some real specs)" do
      get new_user_path
      response.status.should be(200)
    end
  end
end
