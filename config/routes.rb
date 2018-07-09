Rails.application.routes.draw do
  root 'home#root'
  namespace :api do
    namespace :v1 do
      get '/rented_books/:id/user', to: 'rented_books#user'
      get '/users/:id/rented_books', to: 'users#rented_books'
      resources :users, only: [:create, :index, :show]
      resources :rented_books, only: [:create, :index, :destroy]
      resources :books, only: [:create, :index, :destroy]
      resources :sessions, only: [:create]
    end
  end
  get '*path', to: 'home#root'
end
