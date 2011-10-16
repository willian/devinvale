DevInVale::Application.routes.draw do
  root to: "home#index"
  match '/venue' => 'home#venue'
  match '/speakers' => 'home#speakers'
  match '/schedule' => 'home#schedule'
  match '/sponsors' => 'home#sponsors'
  match '/organization' => 'home#organization'
  resources :users
end
