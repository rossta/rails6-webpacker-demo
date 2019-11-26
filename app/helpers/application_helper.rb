module ApplicationHelper
  def google_maps_api_key
    ENV.fetch('GOOGLE_MAPS_API_KEY') { raise "Please set the ENV var GOOGLE_MAPS_API_KEY" }
  end
end
