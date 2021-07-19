class ApplicationController < ActionController::Base
  before_action :configure_sign_up_params, if: :devise_controller?

  protected
  def configure_sign_up_params
    added_attrs = [:nickname,:email,:encrypted_password]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys:  added_attrs
    devise_parameter_sanitizer.permit :sign_in, keys:  added_attrs
  end
end
