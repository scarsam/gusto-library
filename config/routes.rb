Rails.application.routes.draw do
  root 'home#root'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index]
    end
  end
  get '*path', to: 'home#root'
end
