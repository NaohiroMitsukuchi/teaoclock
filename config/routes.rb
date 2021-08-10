Rails.application.routes.draw do
  
  root 'tops#index'

  devise_for :users, :controllers => {
    :registrations => 'users/registrations',
    :sessions => 'users/sessions'   
  } 

  devise_scope :user do
    get '/users/logout', to: 'users/sessions#logout'
  end

  resources :my_teas, only: [:index, :new, :create, :edit, :update, :destroy] do
    collection do
      get 'logs_show', defaults: { format: 'json' }
    end
    resources :drop_conditions, only: [:index, :new, :create, :edit, :update, :destroy]
  end
end
