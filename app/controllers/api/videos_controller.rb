class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
    end

    def show
        @video = Video.find_by(id: params[:id])
    end

    def update
        @video = Video.find_by(id: video_params[:id])
        updates = video_params
        updates.delete("id")
        if @video.update(updates)
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def create
        @video = Video.new(video_params);
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        @video = Video.find_by(id: params[:id])
        if current_user && @video.uploader_id == current_user.id
            @video.destroy
        else
            render json: @video.errors.full_messages, status: 401
        end
    end

    private

    def video_params
        params.require(:video).permit(:id, :title, :description, :author_id, :view_count)
    end

end
