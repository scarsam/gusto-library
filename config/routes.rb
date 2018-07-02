Rails.application.routes.draw do
  root 'home#root'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index, :show]
      resources :rented_books, only: [:create, :index, :destroy]
      resources :sessions, only: [:create]
      resources :books
    end
  end
  get '*path', to: 'home#root'
end
