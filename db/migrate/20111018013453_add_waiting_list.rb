class AddWaitingList < ActiveRecord::Migration
  def up
    add_column :users, :waiting_list, :boolean
  end

  def down
  end
end
