Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :videos do 
      resources :comments, only: [:index]
      resources :likes, only: [:index]
    end
    resources :comments, only: [:create, :update, :destroy]
    resources :likes, only: [:create, :update, :destroy]
  end
  
  root to:
    'static_pages#root'
end
