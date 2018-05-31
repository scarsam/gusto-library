class HomeController < ApplicationController
  def root
    render html: '', layout: true
  end
end
