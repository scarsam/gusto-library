Rails.application.routes.draw do
  root 'home#root'
  get '/auth/google_oauth2/callback', to: 'sessions#create'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index]
      resources :sessions, only: [:create]
    end
  end
  get '*path', to: 'home#root'
end
