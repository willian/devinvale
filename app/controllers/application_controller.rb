class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :export_i18n_messages

  
  
  private

  def export_i18n_messages
    SimplesIdeias::I18n.export! if Rails.env.development?
  end

end
