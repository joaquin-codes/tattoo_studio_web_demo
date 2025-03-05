export interface Artist {
  id: string
  name: string
  bio: string
  style: string
  instagram?: string
  email?: string
  avatar?: string
}

export interface Tag {
  id: string
  name: string
}

export interface Image {
  id: string
  src: string
  title: string
  artistId: string
  type: "tattoo" | "design"
  tags: string[]
}

