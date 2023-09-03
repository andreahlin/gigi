const { data, error } = await supabase
.storage
.getBucket('media');