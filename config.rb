###
# Compass
###

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

after_configuration do
  bower = "bower_components"
  sprockets.append_path File.join(root, bower)
  sprockets.import_asset("react")
  sprockets.import_asset("fluxxor")
end

activate :react
