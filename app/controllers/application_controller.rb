class ApplicationController < ActionController::Base
  before_action :initialize_gon_data

  def initialize_gon_data
    gon.pages = []

    gon.pages << controller_name
  end
end
