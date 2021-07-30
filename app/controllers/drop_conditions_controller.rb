class DropConditionsController < ApplicationController

  def new
    @my_tea = MyTea.find(params[:my_tea_id])
    @drop_condition = DropCondition.new
    @leaf_types = LeafType.all
    @tea_types = TeaType.all
  end
  
  def create
    @my_tea = MyTea.find(params[:my_tea_id])
    @drop_condition = DropCondition.new(drop_condition_params)
    @leaf_types = LeafType.all
    @tea_types = TeaType.all
    if @drop_condition.save
      redirect_to my_teas_path
    else
      render :new
    end
  end

  def edit
  end

  def update
  end

  private
  def drop_condition_params
    params.require(:drop_condition).permit(:time, :tea_type_id, :number_of_people, :temperature, :note, :evalution).merge(my_tea_id: params[:my_tea_id])
  end
end

