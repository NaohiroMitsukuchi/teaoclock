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
    @my_tea = MyTea.find(params[:my_tea_id])
    @drop_condition = DropCondition.find(params[:id])
    @leaf_types = LeafType.all
    @tea_types = TeaType.all
  end

  def update
    @my_tea = MyTea.find(params[:my_tea_id])
    @drop_condition = DropCondition.find(params[:id])
    @leaf_types = LeafType.all
    @tea_types = TeaType.all
    if @drop_condition.update(drop_condition_params)
      redirect_to my_teas_path
    else
      render :edit
    end
  end

  def destroy
    @drop_condition = DropCondition.find(params[:id])
    if @drop_condition.destroy
      redirect_to my_teas_path
    else
      redirect_to my_teas_path
    end
  end

  def drop
    @my_tea = MyTea.find(params[:my_tea_id])
    @drop_condition = DropCondition.find(params[:id])
    @tea_type = @drop_condition.tea_type[:name]
  end

  private
  def drop_condition_params
    params.require(:drop_condition).permit(:time, :water_quantity, :leaf_quantity, :tea_type_id, :number_of_people, :temperature, :note, :evaluation).merge(my_tea_id: params[:my_tea_id])
  end
end

