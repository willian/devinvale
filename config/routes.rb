DevInVale::Application.routes.draw do
  root to: "home#index"
  match '/venue' => 'home#venue'
  match '/speakers' => 'home#speakers'
  match '/schedule' => 'home#schedule'
  match '/sponsors' => 'home#sponsors'
  match '/organization' => 'home#organization'
  resources :users
  
  # is it possible improve this?
  resources :admin, :only => [:index]
  match '/admin/remove-user/:id' => 'admin#remove_user'
  match '/admin/confirm-user/:id' => 'admin#confirm_user'
end
