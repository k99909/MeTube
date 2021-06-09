class Api::CommentsController < ApplicationController
    def index
        @comments = Video.find_by(id: params[:video_id]).comments
    end

    def show
        @comment = Comment.find_by(id: params[:id])
    end

    def update 
        @comment = Comment.find_by(id: params[:id])
        if @comment.update(comment_params) && @comment.author_id == current_user.id
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if current_user && @comment.author_id == current_user.id
            @comment.destroy
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:id, :body, :video_id, :author_id, :parent_id)
    end
end
