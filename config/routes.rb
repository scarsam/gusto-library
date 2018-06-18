Rails.application.routes.draw do
  root 'home#root'
  namespace :api do
    namespace :v1 do
      get 'users/current_user', to: 'users#current_user'
      resources :users, only: [:create, :index]
      resources :sessions, only: [:create]
    end
  end
  get '*path', to: 'home#root'
end
