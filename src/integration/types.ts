export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      blogs: {
        Row: {
          category_id: number | null
          content: string | null
          created_at: string
          excerpt: string | null
          id: number
          meta_desc: string | null
          slug: string | null
          sub_title: string | null
          title: string | null
        }
        Insert: {
          category_id?: number | null
          content?: string | null
          created_at?: string
          excerpt?: string | null
          id?: number
          meta_desc?: string | null
          slug?: string | null
          sub_title?: string | null
          title?: string | null
        }
        Update: {
          category_id?: number | null
          content?: string | null
          created_at?: string
          excerpt?: string | null
          id?: number
          meta_desc?: string | null
          slug?: string | null
          sub_title?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blogs_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
        ]
      }
      category: {
        Row: {
          category: string
          id: number
        }
        Insert: {
          category: string
          id?: number
        }
        Update: {
          category?: string
          id?: number
        }
        Relationships: []
      }
      project_technology: {
        Row: {
          id: string
          project_id: string
          technology_id: string
        }
        Insert: {
          id?: string
          project_id: string
          technology_id: string
        }
        Update: {
          id?: string
          project_id?: string
          technology_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_technology"
            columns: ["technology_id"]
            isOneToOne: false
            referencedRelation: "technology"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          demo: string | null
          description: string
          github: string | null
          id: string
          img: string
          name: string
          project_id: string | null
        }
        Insert: {
          demo?: string | null
          description: string
          github?: string | null
          id?: string
          img: string
          name: string
          project_id?: string | null
        }
        Update: {
          demo?: string | null
          description?: string
          github?: string | null
          id?: string
          img?: string
          name?: string
          project_id?: string | null
        }
        Relationships: []
      }
      skillnest: {
        Row: {
          created_at: string
          email: string
          id: number
          message: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: number
          message: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          message?: string
          name?: string
        }
        Relationships: []
      }
      skills: {
        Row: {
          id: string
          img: string
          name: string
        }
        Insert: {
          id?: string
          img: string
          name: string
        }
        Update: {
          id?: string
          img?: string
          name?: string
        }
        Relationships: []
      }
      syncai: {
        Row: {
          created_at: string
          email: string
          id: number
          message: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: number
          message: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          message?: string
          name?: string
        }
        Relationships: []
      }
      technology: {
        Row: {
          id: string
          name: string
          type: string
        }
        Insert: {
          id?: string
          name: string
          type: string
        }
        Update: {
          id?: string
          name?: string
          type?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const
