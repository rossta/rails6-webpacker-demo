module ApplicationHelper
  def javascript_packs_with_chunks_names
    @javascript_packs_with_chunks_names ||= %w[application]
  end

  def add_javascript_pack_with_chunks(pack_name)
    javascript_packs_with_chunks_names << pack_name
  end
end
