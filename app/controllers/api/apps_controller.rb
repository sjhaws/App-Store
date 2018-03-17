class Api::AppsController < ApplicationController
  before_action :set_app, oonly: [:show, :update, :destroy]
  
  def index
    render json: Apps.all
  end

  def show
    render json: @app
  end

  def update
    if @app.update(app_params)
      render json: @app
    else
      render json: @app.errors, status: 422
    end
  end

  def create
    app = App.new(app_params)
    if app.save
      render json: app
    else
      render json: app.errors, status: 422
    end
  end

  def destroy
    @app.destroy
  end

  private
    def set_app
      @app = App.find(params[:id])
    end

    def app_params
      params.require(:app).permit(:name, :description, :price, :department)
    end
end
