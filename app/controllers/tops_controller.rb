class TopsController < ApplicationController

  def index
    @leaf_types = TeaType.all
    @astringency = Astringency.all
    # binding.pry
  end
  
end
