class MyTeasController < ApplicationController
  before_action :move_to_root, only: [:index, :new, :edit]
  before_action :correct_user, only: [:destroy, :edit, :update]

  def index
    @my_teas = current_user.my_teas
    respond_to do |format|
      format.html
      format.json
    end
  end
  def new
    @my_tea = MyTea.new
    @my_tea.my_tea_images.new
  end

  def create
    @my_tea = MyTea.new(my_tea_params)
    if @my_tea.save
      redirect_to my_teas_path, notice: "紅茶が登録されました"
    else 
      @my_tea.my_tea_images.new
      render :new
    end
  end

  def edit
    @my_tea = MyTea.find(params[:id])
  end

  def update
    @my_tea = MyTea.find(params[:id])
    if @my_tea.update(my_tea_params)
      redirect_to my_teas_path, notice: "紅茶情報を変更しました"
    else
      render :edit
    end
  end

  def destroy
    @my_tea = MyTea.find(params[:id])
    if @my_tea.destroy
      redirect_to my_teas_path, notice: "紅茶を削除しました"
    else
      render :edit
    end
  end

  def logs_show
    @drop_condition_logs = DropCondition.where(my_tea_id: params[:card_index])
    @my_tea_id = params[:card_index].to_i
  end

  private
  def my_tea_params
    params.require(:my_tea).permit(:product_name,:campany,:leaf_type_id,:origin,:flavor,my_tea_images_attributes: [:url, :_destroy, :id]).merge(user_id: current_user.id)
  end

  def move_to_root
    redirect_to(root_path) unless user_signed_in?
  end

  def correct_user
    user = MyTea.find(params[:id]).user
    redirect_to(root_path) unless user == current_user
  end
end
