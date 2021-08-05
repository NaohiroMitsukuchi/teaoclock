Rails.application.routes.draw do

  devise_for :users, :controllers => {
    :registrations => 'users/registrations',
    :sessions => 'users/sessions'   
  } 

  root 'tops#index'

  resources :my_teas, only: [:index, :new, :create, :edit, :update, :destroy] do
    collection do
      get 'logs_show', defaults: { format: 'json' }
    end
    resources :drop_conditions, only: [:index, :new, :create, :edit, :update, :destroy]
  end

end
