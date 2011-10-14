class AddProfileFieldsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :string, null: false
    add_column :users, :permalink, :string, null: false
    add_column :users, :twitter, :string, default: nil
    add_column :users, :cpf, :string, null: false
    add_column :users, :company, :string, default: nil
    add_column :users, :college, :string, default: nil
    add_column :users, :foreigner, :boolean, default: false, null: false
    add_column :users, :ita_student, :boolean, default: false, null: false
    add_column :users, :ita_badge, :boolean, default: false, null: false
  end
end
