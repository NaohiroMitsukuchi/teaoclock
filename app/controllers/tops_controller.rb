class TopsController < ApplicationController

  def index
    @tea_types = TeaType.all
    @astringency = Astringency.all
    # binding.pry
  end
  
end
