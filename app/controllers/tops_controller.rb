class TopsController < ApplicationController

  def index
    @leaf_types = TeaType.all(id: 1)
  end
  
end
