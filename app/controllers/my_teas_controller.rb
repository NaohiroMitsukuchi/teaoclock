class MyTeasController < ApplicationController

  def index
    @my_teas = current_user.my_teas
  end
  def new
    @my_tea = MyTea.new
    # @my_tea.my_tea_images.new
  end

  def create
    @my_tea = MyTea.new(my_tea_params)
    if @my_tea.save
      redirect_to my_teas_path
    else 
      render :new
    end
  end

  private
  def my_tea_params
    params.require(:my_tea).permit(:product_name,:campany,:leaf_type_id,:origin,:flavor,my_tea_images_attributes: [:url, :_destroy, :id]).merge(user_id: current_user.id)
  end
end
