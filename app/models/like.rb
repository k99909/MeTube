class Like < ApplicationRecord
    validates :video_id, :liker_id, presence: true
    validates :like_type, inclusion: {in: [true, false]}
    validates :liker_id, uniqueness: {scope: :video_id}

    belongs_to :liker,
        foreign_key: :liker_id,
        class_name: :User

    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video
end
