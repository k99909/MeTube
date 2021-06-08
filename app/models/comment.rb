class Comment < ApplicationRecord
    validates :body, :video_id, :author_id, presence: true

    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :parent,
        class_name: :Comment,
        optional: :current_user

    has_many :replies,
    foreign_key: :parent_id,
    class_name: :comment,
    dependent: :destroy


end
