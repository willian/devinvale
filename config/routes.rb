DevInVale::Application.routes.draw do
  root to: "home#index"
  match '/venue' => 'home#venue'
  resources :users
end
