class AddCancelRegistration < ActiveRecord::Migration
  def up
    add_column :users, :canceled, :boolean
  end

  def down
  end
end
