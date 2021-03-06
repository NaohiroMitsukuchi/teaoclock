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
    resources :drop_conditions, only: [:new, :create, :edit, :update, :destroy] do
      collection do
        get ':id/drop', to: 'drop_conditions#drop'
      end
    end
  end
end
