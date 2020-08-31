class ApplicationController < ActionController::Base
  before_action :initialize_gon

  private

  def initialize_gon
    gon.pages = []

    gon.pages << controller_name
  end
end
