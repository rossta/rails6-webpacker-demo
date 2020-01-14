Rails.application.routes.draw do
  root to: 'welcome#index'

  get "map/line_data.geojson", to: "welcome#map"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
